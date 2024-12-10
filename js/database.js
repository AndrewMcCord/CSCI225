import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

{
  "wins": 5,
  "losses": 2
}


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updatePlayerStats(playerId, won) {
  const playerRef = doc(db, "players", playerId);

  try {
    const playerDoc = await getDoc(playerRef);

    if (playerDoc.exists()) {
      await updateDoc(playerRef, {
        wins: won ? increment(1) : increment(0),
        losses: won ? increment(0) : increment(1),
      });
    } else {
      await setDoc(playerRef, {
        wins: won ? 1 : 0,
        losses: won ? 0 : 1,
      });
    }

    console.log("Player stats updated successfully!");
  } catch (error) {
    console.error("Error updating player stats:", error);
  }
}

// Example: A player with ID "player123" won a game
updatePlayerStats("player123", true);

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /players/{playerId} {
      allow read, write: if request.auth != null;
    }
  }
}
