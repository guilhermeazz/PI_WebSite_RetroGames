import React from 'react';

const Login = () => {
    return (
        <>
            
            <div className="absolute inset-0 -z-1">
                <div className="bg-primary-1 w-full h-1/2"></div>
                <div className="bg-primary-5 w-full h-1/2"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-4/6 w-1/2 rounded-2xl overflow-hidden">

                    <div className="bg-primary-2 w-1/2 h-full"></div>
                    <div className="bg-primary-4 w-1/2 h-full"></div>

                </div>
            </div>
        </>
    );
}

export default Login;
