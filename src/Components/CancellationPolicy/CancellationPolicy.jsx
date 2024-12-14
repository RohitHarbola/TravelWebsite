import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Cancellation Policy
        </h1>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            **Free Cancellation:** You can cancel your cab booking for free up
            to 1 hour before the scheduled pickup time.
          </li>
          <li>
            **Partial Refund:** Cancellations made within 1 hour of the
            scheduled pickup time will be eligible for a partial refund. A
            cancellation fee may apply.
          </li>
          <li>
            **No Refund:** No refund will be provided if the cancellation is
            made after the cab has reached the pickup location or the ride has
            started.
          </li>
          <li>
            To cancel your booking, please contact our support team at{" "}
            <span className="text-blue-500">+91-97605-15312</span> or email us at{" "}
            <span className="text-blue-500">TeamGoZobby@gmail.com</span>.
          </li>
          <li>
            If the ride is canceled due to unforeseen circumstances (e.g.,
            natural disasters, emergencies), a full refund will be provided.
          </li>
          <li>
            Refunds (if applicable) will be processed within 5-7 business days
            to the original payment method.
          </li>
          <li>
            For any issues regarding cancellations or refunds, please feel free
            to reach out to our 24/7 customer support.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CancellationPolicy;
