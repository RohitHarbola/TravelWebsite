import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="mb-4">
          Welcome to GoZobby! By booking a cab with us, you agree to the
          following terms and conditions:
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Booking Confirmation:</strong> Your booking is confirmed
            only after you receive a confirmation email or message from us. We
            are not liable for any discrepancies in bookings caused by incorrect
            details provided by you.
          </li>
          <li>
            <strong>Cancellation Policy:</strong> Cancellation charges may
            apply depending on the time of cancellation. Please review our{" "}
            <a href="/cancellation-policy" className="text-blue-500 underline">
              Cancellation Policy
            </a>{" "}
            for more details.
          </li>
          <li>
            <strong>Passenger Responsibility:</strong> Passengers are
            responsible for being on time at the pickup location. Delays may
            result in additional charges or cancellation of the trip.
          </li>
          <li>
            <strong>Payment:</strong> All payments must be made in full before
            the trip starts. Any additional charges incurred during the trip
            (e.g., tolls, parking fees) must be paid by the passenger.
          </li>
          <li>
            <strong>Driver and Vehicle:</strong> The vehicle and driver details
            will be shared with you prior to the trip. We ensure our drivers are
            licensed and vehicles are well-maintained.
          </li>
          <li>
            <strong>Usage Limitations:</strong> Smoking, drinking, or carrying
            illegal items in the vehicle is strictly prohibited. Passengers
            found violating this rule may have their trip terminated without
            refund.
          </li>
          <li>
            <strong>Liability:</strong> GoZobby is not responsible for delays
            caused by traffic, weather, or unforeseen circumstances. We are not
            liable for any loss of personal belongings during the trip.
          </li>
          <li>
            <strong>Amendments:</strong> We reserve the right to modify these
            terms at any time. It is your responsibility to review the terms
            before booking.
          </li>
        </ol>
        <p className="mt-6">
          Thank you for choosing GoZobby. We look forward to serving you!
        </p>
        <div className="text-center mt-6">
          <a
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
