class Components extends React.Component {
    constructor(props){
        super(props);
    }

    render(props){
        return(
            <>
            
                <div class="space-y-10 text-lg text-gray-700">
                    <div class="flex space-x-10">

                        <Component
                            title='POPULAR COURSES'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                        <Component
                            title='MODERN LIBRARY'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                        <Component
                            title='QUALIFIED TEACHER'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                    </div>

                    <div class="flex space-x-10">
                        <Component
                            title='UNLIMITED COURSES'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                        <Component
                            title='MANY LOCATIONS'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                        <Component
                            title='ONLINE SUPPORT'
                            subtitle='Lorem ipsum dolor sit, amet consectetur elit.'
                        />

                    </div>

                </div>

                
            </>
        )
    }


}