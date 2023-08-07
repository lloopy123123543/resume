import Stripe from "stripe";

export interface UserDetails{
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];

}
export interface Product{
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    image?: string;
    metadata?: Stripe.Metadata
}
export interface Price{
    id: string;
    product_id?: string;
    description?: string;
    unit_amount?:number;
    currency?: string;
    type?: Stripe.Price.Type
    interval?: Stripe.Price.Recurring.Interval;
    trial_period_days?: number | null;
    metadata?: Stripe.Metadata;
    products?: Product;

}
export interface Subscription {
    id: string;
    user_id: string;
    statue?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    quantity?:number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    prices?: Price;
}

export interface Resume {
    id: string;
    user_name: string;
    user_surname:string;
    user_id: string;
}