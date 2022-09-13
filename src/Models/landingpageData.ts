export type landingpageDataDefinition = {
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
        card: [         
            {
                serviceCompHeader: string,
                serviceCompText: string,
                svgClasses: string,
                id: number

            },
            {
                serviceCompHeader: string,
                serviceCompText: string
                svgClasses: string,
                id: number
            }
        ]
    },
    page: string
}