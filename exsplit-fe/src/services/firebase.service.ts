import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    getDoc,
    addDoc,
    Timestamp 
} from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
}

class FirebaseService {
    private static instance: FirebaseService;
    private app: FirebaseApp | null = null;
    private db: Firestore | null = null;
    private isInitialized: boolean = false;

    private constructor() {
        // Private constructor to enforce singleton pattern
    }

    /**
     * Get the singleton instance of FirebaseService
     */
    public static getInstance(): FirebaseService {
        if (!FirebaseService.instance) {
            FirebaseService.instance = new FirebaseService();
        }
        return FirebaseService.instance;
    }

    /**
     * Get Firebase configuration from environment variables
     * @returns Firebase configuration object
     */
    private getFirebaseConfig(): FirebaseConfig {
        const apiKey = import.meta.env.FIREBASE_API_KEY;
        const authDomain = import.meta.env.FIREBASE_AUTH_DOMAIN;
        const projectId = import.meta.env.FIREBASE_PROJECT_ID;
        const storageBucket = import.meta.env.FIREBASE_STORAGE_BUCKET;
        const messagingSenderId = import.meta.env.FIREBASE_MESSAGING_SENDER_ID;
        const appId = import.meta.env.FIREBASE_APP_ID;

        if (!apiKey || !authDomain || !projectId) {
            throw new Error(
                'Missing required Firebase environment variables. ' +
                'Please ensure FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, ' +
                'and FIREBASE_PROJECT_ID are set in your .env file.'
            );
        }

        const config: FirebaseConfig = {
            apiKey,
            authDomain,
            projectId
        };

        if (storageBucket) {
            config.storageBucket = storageBucket;
        }

        if (messagingSenderId) {
            config.messagingSenderId = messagingSenderId;
        }

        if (appId) {
            config.appId = appId;
        }

        return config;
    }

    /**
     * Initialize Firebase with configuration from environment variables
     * Can also accept optional config parameter to override env variables
     * @param config Optional Firebase configuration object to override env variables
     */
    public initialize(config?: FirebaseConfig): void {
        if (this.isInitialized) {
            console.warn('Firebase is already initialized');
            return;
        }

        try {
            const firebaseConfig = config || this.getFirebaseConfig();
            this.app = initializeApp(firebaseConfig);
            this.db = getFirestore(this.app);
            this.isInitialized = true;
            console.log('Firebase initialized successfully');
        } catch (error) {
            console.error('Error initializing Firebase:', error);
            throw error;
        }
    }

    /**
     * Check if Firebase is initialized
     */
    public getIsInitialized(): boolean {
        return this.isInitialized;
    }

    /**
     * Get Firestore database instance
     */
    public getDb(): Firestore {
        if (!this.db) {
            throw new Error('Firebase is not initialized. Call initialize() first.');
        }
        return this.db;
    }

    /**
     * Create or update a document in a collection
     * @param collectionName Name of the collection
     * @param documentId Optional document ID. If not provided, Firestore will generate one
     * @param data Data to be stored
     * @returns Promise resolving to the document ID
     */
    public async put<T extends Record<string, unknown>>(
        collectionName: string,
        data: T,
        documentId?: string
    ): Promise<string> {
        this.ensureInitialized();

        try {
            const db = this.getDb();
            const collectionRef = collection(db, collectionName);

            if (documentId) {
                // Use setDoc to create or overwrite document with specific ID
                const docRef = doc(collectionRef, documentId);
                await setDoc(docRef, {
                    ...data,
                    updatedAt: Timestamp.now()
                });
                return documentId;
            } else {
                // Use addDoc to create document with auto-generated ID
                const docRef = await addDoc(collectionRef, {
                    ...data,
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                });
                return docRef.id;
            }
        } catch (error) {
            console.error(`Error creating/updating document in ${collectionName}:`, error);
            throw error;
        }
    }

    /**
     * Update an existing document in a collection
     * @param collectionName Name of the collection
     * @param documentId Document ID to update
     * @param data Partial data to update
     */
    public async update<T extends Record<string, unknown>>(
        collectionName: string,
        documentId: string,
        data: Partial<T>
    ): Promise<void> {
        this.ensureInitialized();

        try {
            const db = this.getDb();
            const docRef = doc(db, collectionName, documentId);
            
            await updateDoc(docRef, {
                ...data,
                updatedAt: Timestamp.now()
            } as Record<string, unknown>);
        } catch (error) {
            console.error(`Error updating document ${documentId} in ${collectionName}:`, error);
            throw error;
        }
    }

    /**
     * Delete a document from a collection
     * @param collectionName Name of the collection
     * @param documentId Document ID to delete
     */
    public async delete(
        collectionName: string,
        documentId: string
    ): Promise<void> {
        this.ensureInitialized();

        try {
            const db = this.getDb();
            const docRef = doc(db, collectionName, documentId);
            await deleteDoc(docRef);
        } catch (error) {
            console.error(`Error deleting document ${documentId} from ${collectionName}:`, error);
            throw error;
        }
    }

    /**
     * Get a document from a collection
     * @param collectionName Name of the collection
     * @param documentId Document ID to retrieve
     * @returns Promise resolving to the document data or null if not found
     */
    public async get<T>(
        collectionName: string,
        documentId: string
    ): Promise<T | null> {
        this.ensureInitialized();

        try {
            const db = this.getDb();
            const docRef = doc(db, collectionName, documentId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() } as T;
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Error getting document ${documentId} from ${collectionName}:`, error);
            throw error;
        }
    }

    /**
     * Ensure Firebase is initialized before operations
     */
    private ensureInitialized(): void {
        if (!this.isInitialized || !this.db) {
            throw new Error('Firebase is not initialized. Call initialize() first.');
        }
    }
}

// Export singleton instance
export default FirebaseService.getInstance();

