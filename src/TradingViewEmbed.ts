const generateSymbolInfoChart = (elementId: string, symbol: string) => {
    console.log("DEBUG 1", document.getElementById(elementId))
    if (document.getElementById(elementId)) {
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
        console.log("DEBUG 2", document.getElementById(elementId))
        document.getElementById(elementId)!.appendChild(script);
        console.log("DEBUG 3", document.getElementById(elementId))
    }
}

export { generateSymbolInfoChart };