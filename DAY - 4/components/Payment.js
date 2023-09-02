import React,{useEffect} from 'react';

const Payment = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-bold mb-6">Choose Payment Method</h1>
                <div className="space-y-4">
                    {/* Card Payment */}
                    <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">Card Payment</h2>
                            <p className="text-gray-600">Pay using your Credit/Debit card</p>
                        </div>
                        <img
                            src="https://w7.pngwing.com/pngs/519/586/png-transparent-split-payment-credit-card-computer-icons-payment-system-credit-card-angle-hand-payment.png"
                            alt="Card Payment"
                            className="h-12 w-12"
                        />
                    </div>

                    {/* UPI Payment */}
                    <div className="bg-yellow-100 rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">UPI Payment</h2>
                            <p className="text-gray-600">Pay using UPI apps</p>
                        </div>
                        <img
                            src="https://cricketbettingapp.in/wp-content/uploads/2022/04/upi-1.png"
                            alt="UPI Payment"
                            className="h-12 w-12"
                        />
                    </div>

                    {/* EMI Payment */}
                    <div className="bg-green-100 rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">EMI Payment</h2>
                            <p className="text-gray-600">Easy Monthly Installments</p>
                        </div>
                        <img
                            src="data:image/png;base64,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"
                            alt="EMI Payment"
                            className="h-12 w-12"
                        />
                    </div>

                    {/* Food Card Payment */}
                    <div className="bg-red-100 rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">Food Card Payment</h2>
                            <p className="text-gray-600">Use your food card balance</p>
                        </div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/90/Sodexo_logo.svg"
                            alt="Food Card Payment"
                            className="h-12 w-12"
                        />
                    </div>
                </div>

                {/* Checkout Button */}
                <button className="bg-green-600 text-white py-3 rounded-md w-full mt-6 font-semibold text-center transition duration-300 hover:bg-green-700">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Payment;
