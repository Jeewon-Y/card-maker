import firebaseApp from './firebase';

class CardRepository {
    // 우선 API 생각하자
    syncCards(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value=snapshot.val();
            value && onUpdate(value);
        });

        return () => {
            ref.off();
        }
    }
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }

    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;