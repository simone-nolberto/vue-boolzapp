console.log('it works!!');

const { createApp } = Vue
createApp({
    data() {
        return {
            activeChat: 0,
            check: '',
            sent: 'sent',
            received: 'received',
            show: 'df',
            hide: 'dn',
            newMessage: {
                date: '10/01/2020 15:30:55',
                text: '',
                status: 'sent'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            menuStatus: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            menuStatus: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            menuStatus: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            menuStatus: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            menuStatus: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            menuStatus: false,
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            menuStatus: false,
                        }, {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            menuStatus: false,
                        }, {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            menuStatus: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            menuStatus: false,

                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            menuStatus: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            menuStatus: false,
                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            menuStatus: false,
                        },
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            menuStatus: false,
                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            menuStatus: false,
                        }, {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            menuStatus: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            menuStatus: false,
                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            menuStatus: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            menuStatus: false,
                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            menuStatus: false,
                        }, {

                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            menuStatus: false,
                        },
                    ]
                },
            ],
        }

    },
    methods: {


        changeChat(index) {
            // console.log('prossima chat', index);
            this.activeChat = index;
            // console.log(this.activeChat);

        },

        pushMessage(activeChat) {
            // console.log(this.newMessage);
            const lastUserMessage = {
                date: '10/01/2020 15:30:55',
                message: this.newMessage.text,
                status: 'sent',
                menuStatus: false,
            };
            // console.log(lastUserMessage);
            // console.log(this.contacts[activeChat].messages);
            this.contacts[activeChat].messages.push(lastUserMessage);
            this.newMessage.text = '';


            setTimeout(() => {
                if (this.contacts[activeChat].messages.length = this.contacts[activeChat].messages.length++) {

                    const autoAnswer = {
                        date: '10/01/2020 15:30:55',
                        message: 'ok',
                        status: 'received',
                        menuStatus: false,
                    };
                    // console.log(this.contacts[activeChat].messages);
                    this.contacts[activeChat].messages.push(autoAnswer)
                }
                this.pushMessage;
            }, 1000);



        },

        deleteMessage(activeChat, message, index) {
            // console.log(activeChat, message, index);

            this.contacts[activeChat].messages.splice(index, 1)


        },

        findChat() {

            // console.log(this.check);
            const checkCharArray = this.check.toLowerCase();
            // console.log(checkCharArray);

            for (let i = 0; i < this.contacts.length; i++) {
                const contactName = this.contacts[i].name.toLowerCase();
                // console.log(contactName);
                let check = contactName.match(checkCharArray);
                // console.log(check);

                if (check === null) {
                    // console.log('Riprova con un altro nome');
                    this.contacts[i].visible = false;

                } else {
                    // console.log('Ci sono!');
                    this.contacts[i].visible = true;

                }


            }

        },

        showMenu(message) {

            if (message.menuStatus === false) {

                message.menuStatus = true

            }
            // console.log(message);

        },

        hideMenu(message) {
            if (message.menuStatus = true) {

                message.menuStatus = false
            }
            // console.log(message);

        },


    },



}).mount('#app')

