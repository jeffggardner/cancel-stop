import shared from '@republicservicesrepository/dops-shared';
const { logger, wrapper } = shared;
const { Service } = wrapper

import { CancelStopRequest } from './model';
import CancelStopSchema from './schema';
import { handlerFunction } from './cancel-stop.function';

async function handlerWrapper(request: CancelStopRequest ): Promise< CancelStopResponse > {

  const transactionId = request.headers.TransactionID;
  logger.info(`begin transactionId ${transactionId}`);
  logger.debug('inbound request:', request);

  return handlerFunction(request);
}

export const { handler } = new Service(handlerWrapper, CancelStopSchema);