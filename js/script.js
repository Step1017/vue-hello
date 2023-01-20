// Step 4 = inizializzo istanza di Vue:
    //4.a = recupero la funzione createApp dall'oggetto globale Vue:
    const { createApp } = Vue;

    //4.b = richiamo la funzione createApp:
    createApp({
        data() {

            return {
                welcome: {
                    title: 'Welcome Vue!',
                    content: 'A way to make your life easier',
                    media: 'https://learn.microsoft.com/training/achievements/vue-first-steps-social.png'
                }
            }
        }

    //4.c = montiamo la nostra istanza di Vue nell'HTML
    }).mount('#app');