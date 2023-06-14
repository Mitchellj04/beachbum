class CheckoutController < ApplicationController

    def create
        product = Product.find_by(id: params[:product_id])
        session = Stripe::Checkout::Session.create({
            payment_method_types: ['card'],
            line_items: [{
                name: product.name
                amount: product.price,
                quantity: 1,
                currency: 'usd',
                }],
            mode: 'payment',
            success_url: root_url,
            cancel_url: root_url,
            })
    end



end


