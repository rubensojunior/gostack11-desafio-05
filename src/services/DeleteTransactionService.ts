// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm'
import TransactionRepository from '../repositories/TransactionsRepository'

interface Request {
  id: string
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository)

    const transaction = await transactionRepository.findTransactionById(id)

    if (!transaction) {
      throw new Error('Transação não encontrada')
    }

    await transactionRepository.delete(id)
  }
}

export default DeleteTransactionService
