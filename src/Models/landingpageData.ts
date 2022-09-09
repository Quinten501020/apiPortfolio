type landingpageDataDefinition = {
    header: {
        quoteTag: string,
        quoteFirst: string,
        quoteSecond: string,
        images: {
            imagePath1: string,
            imagePath2: string,
            imagePath3: string
        }
    },
    learnmore: {
        learnmoreText: string,
        learnmoreLinkText: string,
        learnmoreLinkUrl: string
    },
    services: {
        servicesTag: string,
        serviceHeader: string,
        serviceComp1: {
            serviceCompHeader: string,
            serviceCompText: string
        },
        serviceComp2: {
            serviceCompHeader: string,
            serviceCompText: string
        }
    }
    contactme: {
        contactmeTag: string,
        contactmeHeader: string,
        contactmePhoneNumberTitle: string,
        contactmePhoneNumber: string,
        contactmePhoneNumberShow: boolean,
        contactmeEmailTitle: string
        contactmeEmail: string
    }
}

export const landingpageDataModel: landingpageDataDefinition = {
    header: {
        quoteTag: 'Vista College',
        quoteFirst: 'IT\'S NOT JUST TALENT',
        quoteSecond: 'IT\'S JUST WORK',
        images: {
            imagePath1: '../../assets/img/products/1.jpg',
            imagePath2: '../../assets/img/products/2.jpg',
            imagePath3: '../../assets/img/products/3.jpg',
        }
    },
    learnmore: {
        learnmoreText: 'Leuk dat je komt kijken op mijn website! Als je wilt weten wie ik ben en wat ik nou eigelijk doe, klik dan maar even op t linkje hieronder',
        learnmoreLinkText: 'Klik hier!',
        learnmoreLinkUrl: '/over-mij'
    },
    services: {
        servicesTag: 'Wat bied ik?',
        serviceHeader: 'Buiten school bied ik ook nog een aantal services aan',
        serviceComp1: {
            serviceCompHeader: 'Computer reparatie',
            serviceCompText: 'Ik doe in mijn vrije tijd veel met computers en heb er ondertussen al een aardig handje van. Problemen met uw computer? Stuur gerust een mailtje!' 
        },
        serviceComp2: {
            serviceCompHeader: 'Websites / Apps',
            serviceCompText: 'Ik ben natuurlijk een echte programmeur voor beroep. In overleg sta ik altijd open websites of apps te maken'
        }
    },
    contactme: {
        contactmeTag: 'Contact',
        contactmeHeader: 'Hoe kun je me bereiken?',
        contactmePhoneNumberTitle: 'Telefoonnummer',
        contactmePhoneNumber: '+31 6 12367794',
        contactmePhoneNumberShow: false,
        contactmeEmailTitle: 'Email',
        contactmeEmail: '501020@vistacollege.nl'
    }
};