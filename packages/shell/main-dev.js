(async () => {
    const { default: { mount: mountApp1 } } = await import('app1/app')
    const { default: { mount: mountApp2 } } = await import('app2/app')

    const rootApp1 = document.getElementById('app1');
    const rootApp2 = document.getElementById('app2');
    mountApp1(rootApp1);
    mountApp2(rootApp2);
})();
