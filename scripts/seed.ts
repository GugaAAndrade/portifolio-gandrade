import { seedProjects } from "../src/lib/data/seed";
import { adminDb } from "../src/lib/firebase/admin";

async function main() {
  const db = adminDb();
  if (!db) {
    throw new Error(
      "Firebase Admin não configurado. Defina FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL e FIREBASE_PRIVATE_KEY.",
    );
  }

  console.log("Seeding projects…");
  const batch = db.batch();

  for (const p of seedProjects) {
    const ref = db.collection("projects").doc();
    batch.set(ref, p);
  }

  await batch.commit();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

