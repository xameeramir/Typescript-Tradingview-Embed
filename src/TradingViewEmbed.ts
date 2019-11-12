const generateSymbolInfoChart = (elementId: string, symbol: string) => {
    if (document.getElementById(elementId) && document.getElementById(elementId)!.innerHTML === "") {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: symbol,
            width: "100%",
            locale: "in",
            colorTheme: "light",
            isTransparent: "true"
        });
        document.getElementById(elementId)!.appendChild(script);
    }
}

export { generateSymbolInfoChart };