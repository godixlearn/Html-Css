export default function OpenRazorPay() {
  const options = {
    key: "rzp_test_Ttg4zGKI8kFaSH",
    amount: 2000,
    currency: "INR",
    name: "Test Company",
    description: "Test Transaction",
    handler: (response) => {
      console.log(response);
      alert("Payment Successful!");
    },
    prefill: {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#F37254",
    },
  };

  const razorPay = new window.Razorpay(options);
  razorPay.open();
}
