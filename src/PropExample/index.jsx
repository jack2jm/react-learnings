import React from "react";

const PropExample = (props) => {
            const {flag, flag1, data, parentComponentHandeler} = props;
            console.log(props);
            return (

                        <div>
                                    {
                                                flag && data
                                    }
                                    <br/>
                                    {
                                                flag1 ? data : 'flag1 is false'
                                    }
                                    <br/>
                                    Prop Example Component
                                    <br/>
                                    <button onClick={parentComponentHandeler}>Click</button>
                        </div>
            )
}

export default PropExample;