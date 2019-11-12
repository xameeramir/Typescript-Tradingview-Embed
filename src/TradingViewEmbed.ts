const generateSymbolInfoChart = (
    elementId: string,
    symbol: string,
    width: string,
    locale: string,
    colorTheme: string,
    isTransparent: boolean
) => {
    if (document.getElementById(elementId) && document.getElementById(elementId)!.innerHTML === "") {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: symbol,
            width: width,
            locale: locale,
            colorTheme: colorTheme,
            isTransparent: isTransparent
        });
        document.getElementById(elementId)!.appendChild(script);
    }
}

export { generateSymbolInfoChart };