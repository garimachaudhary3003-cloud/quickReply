export default defineComponent({
  async run({ steps, $ }) {
    const order = steps.trigger.event.body;

    // 1. Check Order tag
    const orderTags = (order.tags || "").split(",").map(t => t.trim());
    const hasOrderTag = orderTags.includes("MakeOrder");

    // 2. Check Customer tag
    const customerTags = (order.customer?.tags || "").split(",").map(t => t.trim());
    const hasCustomerTag = customerTags.includes("ColdCustomer");

    // 3.. Check Order amount > ₹2500
    const orderAmount = parseFloat(order.total_price || "0");
    const isHighValue = orderAmount > 2500;

    console.log({ hasOrderTag, hasCustomerTag, isHighValue, orderAmount });

    //. Stop workflow if ANY condition fails
    if (!hasOrderTag || !hasCustomerTag || !isHighValue) {
      $.flow.exit("Conditions not satisfied — stopping workflow.");
    }

    return {
      customerEmail: order.customer?.email,
      customerName: order.customer?.first_name || "Valued Customer",
      orderAmount,
    };
  }
});
