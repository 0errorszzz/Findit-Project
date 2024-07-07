import {Router} from 'express'
const router = Router()
import { validateJobInput , validateJobId} from '../middleware/validationMiddleware.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'
import {getAllJobs,getSingleJob,createJob,updateJob,deleteJob,showStats} from '../controllers/jobController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'
router.route('/')
      .get(getAllJobs)
      .post(checkForTestUser,validateJobInput,createJob)


router.route('/stats').get(showStats)

router.route('/:id')
      .get(validateJobId,getSingleJob)
      .patch(checkForTestUser,validateJobInput,validateJobId,updateJob)
      .delete(checkForTestUser,validateJobId,deleteJob)

export default router