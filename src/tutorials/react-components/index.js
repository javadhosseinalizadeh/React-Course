import React from 'react'
import { FunctionComponent1 } from './function-components'
import { FunctionComponent2 } from './function-components'
import { FunctionComponent3 } from './function-components'

import { ClassComponent1 } from './class-components'
import { ClassComponent2 } from './class-components'

import { ImportantText } from './function-components'
const ReactComponent = () => {

    const fc1 = FunctionComponent1()
    const fc2 = FunctionComponent2({ title: 'Hello FC 2', message: 'this is a test message' })
    return (
        <div>
            {fc1}
            <FunctionComponent1 />
            {fc2}
            <FunctionComponent2 title='Hello FC 2' message='this is a test message' />
            <FunctionComponent2 title='bootcamp 1402' message='react native'>
                <ImportantText content={'this is a important text'} />
            </FunctionComponent2>
            <FunctionComponent3 message={'react native'} />
            <FunctionComponent3 message={'react native'} >
                <ImportantText content={'this is a important text'} />

            </FunctionComponent3>

            <hr />

            <ClassComponent1 />
            <ClassComponent2 title='bootcamp 1402' message='react native' />
            <ClassComponent2 title='bootcamp 1402' message='react native'>
                <ImportantText content={'this is a important text'} />
            </ClassComponent2>


        </div>
    );

}

export default ReactComponent