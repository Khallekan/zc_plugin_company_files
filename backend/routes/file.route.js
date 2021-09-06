const router = require('express').Router();

const {
  fileCreate,
  fileRename,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
  toggleStarred,
  searchFileByIsDeleted,
  getAllDeletedFiles,
  setEditPermission,
  searchBySize,
  searchByType
} = require('../controllers/file.controller');

// CREATE A NEW FILE
router.post('/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

//star a particular file
router.patch('/star/:id', toggleStarred);
// SEARCH FOR ALL DELETED FILES
router.get('/file/searchByisDeleted', searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// Renames file
router.post('/rename/:id', fileRename);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)

// SEARCH FILES BY SIZE
router.get('/searchBySize/:size', searchBySize)

// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles)
router.route('/file/write/:admin')
.put(fileUpdate)
.delete(fileDelete)
// SET EDIT PERMISSION
router.get('/setedit/:admin', setEditPermission)

// SEARCH FILES BY FILE TYPE
router.get('/searchByType', searchByType);

module.exports = router;
