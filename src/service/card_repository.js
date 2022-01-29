import firebaseApp from './firebase';

class CardRepository {
    // 우선 API 생각하자
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }

    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;