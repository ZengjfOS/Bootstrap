'use strict';

(async () => {
    console.log (ccxt.exchanges);                       // print all available exchanges
    console.log (ccxt);                                 // print all available exchanges

    // okex = new ccxt.okex({"verbose":true});                             // print all available exchanges
    let okex = new ccxt.okex({
        'apiKey': 'YOUR_OKex_API_KEY',
        'secret': 'YOUR_OKex_SECRET_KEY',
    });                             // print all available exchanges
    console.log(okex);
    console.log(okex.fetchTicker("BCH/ETH"));        // print all available exchanges
    console.log(okex.fetchTickers());        // print all available exchanges
    console.log(okex.fetchMarkets());        // print all available exchanges
    console.log("balance:")
    console.log(okex.fetchBalance());        // print all available exchanges

    let okex_markets = await okex.load_markets ();
    console.log(okex_markets);
}) ()
