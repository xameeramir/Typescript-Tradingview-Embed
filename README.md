Typescript component for [TradingView Embeds](https://www.tradingview.com/widget/)
<br />

### Installation
`npm install --save typescript-tradingview-embed`<br />
or<br />
`yarn add typescript-tradingview-embed`
<br />

### Example
App.js / App.ts

```
TODO: update usage

import { TradingViewEmbed, widgetType } from "typescript-tradingview-embed";


export default function App() {
  return (
    <div
      className="App"
      style={{background: "rgba(0, 0, 0, 0.85)"}}
    >
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          colorTheme: "dark",
          symbol: "BITMEX:XBTUSD",
          width: "100%"
        }}
      />
      <TradingViewEmbed
        widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
        widgetConfig={{
          colorTheme: "dark",
          width: "100%",
          height: "230",
        }}
      />
      <TradingViewEmbed
        widgetType={widgetType.TICKER_TAPE}
        widgetConfig={{
          colorTheme: "light",
          autosize: true
        }}
      />
    </div>
  );
}
```
Use widgetConfig to declare widget parameters.<br />
See each [individual widgets](https://www.tradingview.com/widget/) for available parameters.<br />
The above code running:
![screen](https://github.com/nordible/typescript-tradingview-embed/blob/master/bin/screen.PNG)
<br />

**Supported widgets in plan**:
  - [x] [ADVANCED_CHART](https://www.tradingview.com/widget/advanced-chart/)
  - [x] [COMPANY_PROFILE](https://www.tradingview.com/widget/symbol-profile/)
  - [x] [ECONOMIC_CALENDAR](https://www.tradingview.com/widget/economic-calendar/)
  - [x] [FOREX_CROSS_RATES](https://www.tradingview.com/widget/forex-cross-rates/)
  - [x] [FOREX_HEATMAP](https://www.tradingview.com/widget/forex-heat-map/)
  - [x] [FUNDAMENTAL_DATA](https://www.tradingview.com/widget/fundamental-data/)
  - [x] [MARKET_DATA](https://www.tradingview.com/widget/market-quotes/)
  - [x] [MARKET_OVERVIEW](https://www.tradingview.com/widget/market-overview/)
  - [x] [MINI_CHART](https://www.tradingview.com/widget/mini-chart/)
  - [x] [SCREENER](https://www.tradingview.com/widget/screener/)
  - [x] [SCREENER_CRYPTOCURRENCY](https://www.tradingview.com/widget/crypto-mkt-screener/)
  - [x] [SYMBOL_INFO](https://www.tradingview.com/widget/symbol-info/)
  - [x] [SYMBOL_OVERVIEW](https://www.tradingview.com/widget/symbol-overview/)
  - [x] [STOCK_MARKET](https://www.tradingview.com/widget/market-movers/)
  - [x] [TECHNICAL_ANALYSIS](https://www.tradingview.com/widget/technical-analysis/)
  - [x] [TICKER](https://www.tradingview.com/widget/ticker/)
  - [x] [TICKER_SINGLE](https://www.tradingview.com/widget/single-ticker/)
  - [x] [TICKER_TAPE](https://www.tradingview.com/widget/ticker-tape/)

## Contributions welcome!

[Open a new PR](https://github.com/nordible/typescript-tradingview-embed/pulls) here on GitHub.

## Run locally
- Run `git clone https://github.com/nordible/typescript-tradingview-embed.git` this project
- Run `cd typescript-tradingview-embed/` to this project
- Run `npm run dev` to start the project on local machine

## Bugs and Issues

Have a bug or an issue? [Open a new issue](https://github.com/nordible/typescript-tradingview-embed/issues) here on GitHub.

## License

Code licensed under [MIT](https://opensource.org/licenses/MIT). Everything else is [CC](http://creativecommons.org/)

## Credits

Thanks to [@xnr-k](https://github.com/xnr-k/react-tradingview-embed)

## Follow us

* [twitter.com/nordiblehq](https://twitter.com/nordiblehq)
* [fb.com/nordible](https://www.facebook.com/nordible)

&copy; [nordible](https://nordible.com/)
