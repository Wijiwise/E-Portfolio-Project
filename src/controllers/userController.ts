import { Request, Response } from 'express';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import db from '../db/connections';

// Define the shape of a row in your database
interface PostRow extends RowDataPacket {
    id: number;
    content: string;
    created_at: Date;
    updated_at: Date;
}

export const postController = {
    getAll: async (req: Request, res: Response) => {
        try {
            // Use the PostRow interface for the query result
            const [rows] = await db.query<PostRow[]>('SELECT * FROM posts ORDER BY id DESC');
            res.json(rows);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Internal Server Error";
            res.status(500).json({ error: message });
        }
    },

    create: async (req: Request, res: Response) => {
        try {
            const { content } = req.body as { content: string };
            
            // Use ResultSetHeader for the result of an INSERT
            const [result] = await db.query<ResultSetHeader>(
                'INSERT INTO posts (content) VALUES (?)', 
                [content]
            );
            
            res.status(201).json({ id: result.insertId, content });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to create post";
            res.status(500).json({ error: message });
        }
    },

    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { content } = req.body as { content: string };
            
            await db.query<ResultSetHeader>(
                'UPDATE posts SET content = ? WHERE id = ?', 
                [content, id]
            );
            res.sendStatus(204);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Update failed";
            res.status(500).json({ error: message });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await db.query<ResultSetHeader>('DELETE FROM posts WHERE id = ?', [id]);
            res.sendStatus(204);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Delete failed";
            res.status(500).json({ error: message });
        }
    }
};