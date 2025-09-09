window.blazorCulture = {
    registerResizeHandler: function (dotNetHelper) {
        let isLargeScreen = window.innerWidth >= 690;
        
        // Initial check
        dotNetHelper.invokeMethodAsync('OnScreenSizeChanged', isLargeScreen);
        
        // Listen for resize events
        window.addEventListener('resize', function () {
            const newIsLargeScreen = window.innerWidth >= 690;
            
            // Only call the method if the screen size category changed
            if (newIsLargeScreen !== isLargeScreen) {
                isLargeScreen = newIsLargeScreen;
                dotNetHelper.invokeMethodAsync('OnScreenSizeChanged', isLargeScreen);
            }
        });
    }
};
