import React from "react";
import PropExample from "../PropExample";

const Child = () => {
            return (
                        <div>Child Component</div>
            )
}
function FunctionalBasedComponent(){
            const parentComponentHandeler = () => {
                        console.log('hello from parent component');
            }

            const getValueFromChild = (count) => {
                        console.log(count);
            }

            return  (
                        <div>
                                    <Child />
                                    <PropExample getValueFromChild={getValueFromChild} parentComponentHandeler={parentComponentHandeler} flag1={false} flag={true} data="data123 as prop" />
                                    Functional Based Component
                        </div>
            )
}

export default FunctionalBasedComponent;