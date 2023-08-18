import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { priceId } = req.body
  const { cart } = req.body


  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!cart) {
    return res.status(400).json({ error: 'CartDetails not found.' })
  }

  const lineItems = cart.map((item: any) => {
    return {
      price: item.defaultPriceId,
      quantity: item.quantity,
    }
  })

  // console.log(lineItems)

  const successUrl = `${process.env.NEXT_url}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_url}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}