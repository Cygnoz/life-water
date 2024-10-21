const Stock = require('../Models/StockSchema');
const Transfer = require('../Models/TransferSchema');

const getAllStock = async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ date: -1 });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addStock = async (req, res) => {
  const stock = new Stock({
    transferNumber: req.body.transferNumber,
    date: req.body.date,
    mainRoute: req.body.mainRoute,
    filledBottles: req.body.filledBottles,
    items: req.body.items,
    autoNotes: req.body.autoNotes,
    termsAndConditions: req.body.termsAndConditions
  });

  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStockStats = async (req, res) => {
  try {
    // Aggregate total filled and empty bottles for each route and each day
    const totalStockLoad = await Stock.aggregate([
      {
        $group: {
          _id: {
            mainRoute: "$mainRoute",
            date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }
          },
          totalFilledBottles: { $sum: "$filledBottles" },
          totalEmptyBottles: { $sum: "$emptyBottles" }
        }
      },
      {
        $sort: { "_id.date": 1 } // Sort by date
      }
    ]);

    // Transform the result to the desired format
    const result = totalStockLoad.map(item => ({
      route: item._id.mainRoute,
      date: item._id.date,
      totalFilledBottles: item.totalFilledBottles,
      totalEmptyBottles: item.totalEmptyBottles
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getStockStats;

const internalTransfer = async (req, res) => {
  const { fromTransferNumber, toTransferNumber, filledBottles } = req.body;

  try {
    // Find the stock entry for the fromRoute using fromTransferNumber
    const fromStock = await Stock.findOne({ transferNumber: fromTransferNumber });
    if (!fromStock) {
      return res.status(404).json({ error: 'From transfer number not found' });
    }

    // Find the stock entry for the toRoute using toTransferNumber
    const toStock = await Stock.findOne({ transferNumber: toTransferNumber });
    if (!toStock) {
      return res.status(404).json({ error: 'To transfer number not found' });
    }

    // Check if there are enough filled bottles to transfer
    if (fromStock.filledBottles < filledBottles) {
      return res.status(400).json({ error: `Not enough filled bottles in transfer number ${fromTransferNumber} to transfer` });
    }

    // Check if there are enough empty bottles to return
    if (toStock.emptyBottles < filledBottles) {
      return res.status(400).json({ error: `Not enough empty bottles in transfer number ${toTransferNumber} to return` });
    }

    // Perform the transfer
    fromStock.filledBottles -= filledBottles;
    fromStock.emptyBottles += filledBottles;
    toStock.filledBottles += filledBottles;
    toStock.emptyBottles -= filledBottles;

    // Save the updated stock entries
    await fromStock.save();
    await toStock.save();

    // Log the transfer (if using transfer logs)
    const transferLog = new Transfer({
      fromRoute: fromStock.mainRoute,
      toRoute: toStock.mainRoute,
      filledBottlesTransferred: filledBottles,
      emptyBottlesReturned: filledBottles
    });
    await transferLog.save();

    res.status(200).json({ message: 'Internal transfer completed successfully' });
  } catch (error) {
    console.error('Error performing internal transfer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
    getAllStock,
    addStock,
    getStockStats,
    internalTransfer
};
