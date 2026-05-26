# Shopify Order Automation – Pipedream Workflow

## Overview
This automation receives a Shopify webhook and sends 
two timed emails to qualifying customers.

## Workflow Steps
1. **HTTP Trigger** – Receives Shopify order webhook
2. **Condition Check** – Validates 3 conditions
3. **Email 1** – Immediate greeting email
4. **5 Min Delay** – Waits 5 minutes
5. **Email 2** – Discount unlock email

## Conditions Checked
- Order tag = `MakeOrder`
- Customer tag = `ColdCustomer`
- Order amount > `₹2500`

## Deployment
- **Webhook URL:** https://eo2l98v5av7r3i3.m.pipedream.net
- **Platform:** Pipedream

## Condition Check Code
See `workflow.js`
