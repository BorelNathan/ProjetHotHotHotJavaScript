if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').then(function(registration){
        console.log("Service Worker OK : ", registration);

    }).catch(function(error){
        console.log("Problème Service Worker : ", error);

    });
}