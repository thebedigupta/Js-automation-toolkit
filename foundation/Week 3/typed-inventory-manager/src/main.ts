import { getInventorySummary, getProductsByCategory } from "./inventory";
import { placeOrder, printOrder } from "./orders";
import { Category } from "./types";

async function main(): Promise<void> {
  console.log("🚀 Inventory Manager — TypeScript v3\n");

  // 1. Inventory summary
  await getInventorySummary();

  // 2. Products by category
  console.log("\n📱 ELECTRONICS:");
  const electronics = await getProductsByCategory(Category.Electronics);
  electronics.data.forEach(p =>
    console.log(`  ${p.name} — ₹${p.price} (stock: ${p.stock})`)
  );

  // 3. Place valid orders
  console.log("\n🛒 PLACING ORDERS:");

  const orderRequests = [
    { customerId: 1, items: [{ productId: 1, quantity: 1 }, { productId: 5, quantity: 2 }] },
    { customerId: 2, items: [{ productId: 3, quantity: 3 }] },
    { customerId: 3, items: [{ productId: 2, quantity: 20 }] } // exceeds stock — fails
  ];

  for (const request of orderRequests) {
    try {
      const response = await placeOrder(request);
      printOrder(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`\n❌ Order failed: ${error.message}`);
      }
    }
  }
}

main();