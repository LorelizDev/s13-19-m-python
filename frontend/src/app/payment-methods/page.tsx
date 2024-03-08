import PaymentHome from "@/components/widgets/payment_method/PaymentHome";
import { PaymentDialog } from "@/components/widgets/success_dialog/PaymentDialog";

import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="relative">
      <PaymentHome />
      <PaymentDialog />
    </div>
  );
}
