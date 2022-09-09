type projectsDataDefinition = {
    header: {
        headerTitle: string,
        headerText: string,
        headerList: [string, string, string]
    }
    projects: {
        project1: {
            projectTitle: string,
            projectSpan: string,
            projectText: string
        },
        project2: {
            projectTitle: string,
            projectSpan: string,
            projectText: string
        },
        project3: {
            projectTitle: string,
            projectSpan: string,
            projectText: string
        },
        project4: {
            projectTitle: string,
            projectSpan: string,
            projectText: string
        },
    }
}

export const projectsDataModel: projectsDataDefinition = {
    header: {
        headerTitle: 'Wat doe ik allemaal?',
        headerText: 'Als programmeur maak of kan ik natuurlijk meerdere dingen, wat kan je op deze pagina vinden?',
        headerList: [
            'Wat ik maak voor producten',
            'Technieken die ik ken',
            'Talen die ik ken'
        ]
    },
    projects: {
        project1: {
            projectTitle: 'Websites',
            projectSpan: 'Websites',
            projectText: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus',
        },
        project2: {
            projectTitle: 'Apps',
            projectSpan: 'Apps',
            projectText: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
        },
        project3: {
            projectTitle: 'Technieken kennis',
            projectSpan: 'Technieken',
            projectText: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
        },
        project4: {
            projectTitle: 'Talen kennis',
            projectSpan: 'Talen',
            projectText: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
        },
    }
};
  