import React from 'react'
import type { Metadata } from "next";

import { Summary } from '@/components/widgets/summary_card'

export const metadata: Metadata = {
  title: "Resumen",
  description: "Resumen de tus compras",
}

const page = () => {
  return (
    <Summary />
  )
}

export default page