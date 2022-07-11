const posts = [
    {
        title: 'TEST1',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST2',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST3',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST4',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST5',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST6',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST7',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    },
    {
        title: 'TEST',
        image: 'https://picsum.photos/300/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tempor metus ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula aliquam tellus, sed bibendum odio lobortis at. Fusce dictum malesuada pretium. Cras blandit eros a ipsum sodales, lacinia malesuada sem pretium. Duis non metus congue, fermentum dui eget, facilisis ante. Nulla at tellus rhoncus, mattis sem pellentesque, elementum neque. Aliquam lobortis dui aliquet, pellentesque ante vitae, dictum dolor. Etiam nisl dui, vestibulum vitae iaculis a, semper sed erat. Aliquam purus odio, blandit quis accumsan vitae, dapibus ut purus. Aliquam commodo lorem non metus aliquet fermentum.'
    }
]