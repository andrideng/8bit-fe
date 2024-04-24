import { authMiddleware } from './middlewares/auth-middleware';
import { composeMiddleware } from './middlewares/chain';

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};

export default composeMiddleware([authMiddleware]);
