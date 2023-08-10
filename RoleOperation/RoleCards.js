// ** React Imports
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import Tooltip from '@mui/material/Tooltip'
import Checkbox from '@mui/material/Checkbox'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import FormHelperText from '@mui/material/FormHelperText'
import TableContainer from '@mui/material/TableContainer'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icons Imports
import ContentCopy from 'mdi-material-ui/ContentCopy'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import toast, { Toaster } from 'react-hot-toast';
import Instance from 'src/store/axios';

const cardData = [
  { totalUsers: 4, title: 'Administrator', avatars: ['1.png', '2.png', '3.png', '4.png'] },
  { totalUsers: 7, title: 'Manager', avatars: ['5.png', '6.png', '7.png', '8.png', '1.png', '2.png', '3.png'] },
  { totalUsers: 5, title: 'Users', avatars: ['4.png', '5.png', '6.png', '7.png', '8.png'] },
  { totalUsers: 3, title: 'Support', avatars: ['1.png', '2.png', '3.png'] },
  { totalUsers: 2, title: 'Restricted User', avatars: ['4.png', '5.png'] }
]

const rolesArr = [
  'Customer',
  'User',
  'Permission',
  'Roles'
]

const RolesCards = (props) => {
  // ** States
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('Add')
  const [navConfig, setNavConfig] = useState([]);
  const [checked, setChecked] = useState(false);
  const [roleSelected, setRoleSelected] = useState({
    "active": 1,
    modules: []
  });
  console.log("NavConfiging",navConfig);

  // ** Hooks
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })
  const handleClickOpen = () => 
  {
    navigate('/add-role-list');
    // setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setValue('name', '')
  }

  const renderCards = () =>
    cardData.map((item, index) => (
      <Grid item xs={12} sm={6} lg={4} key={index}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <Typography variant='body2'>Total {item.totalUsers} users</Typography>
              <AvatarGroup
                max={4}
                sx={{
                  '& .MuiAvatarGroup-avatar': { fontSize: '.875rem' },
                  '& .MuiAvatar-root, & .MuiAvatarGroup-avatar': { width: 40, height: 40 }
                }}
              >
                {item.avatars.map((img, index) => (
                  <Avatar key={index} alt={item.title} src={`/images/avatars/${img}`} />
                ))}
              </AvatarGroup>
            </Box>
            <Box>
              <Typography variant='h6' style={{"font-weight":"600"}} sx={{ color: 'text.secondary' }}>
                {item.title}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                variant='body2'
                sx={{ color: 'primary.main', cursor: 'pointer' }}
                onClick={() => {
                  handleClickOpen()
                  setDialogTitle('Edit')
                }}
              >
                Edit Role
              </Typography>
              {/* <IconButton size='small'>
                <ContentCopy />
              </IconButton> */}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))

  console.log("roleSelected",roleSelected);  

  const handleChecked = (mId,id,mName) =>
  { 
    const xyz = {...roleSelected};
    let module = xyz.modules.find(m => m.id == mId)
    if(module){
      if(module.permissions.find(p => p.permission_id == id)){
        const index = module.permissions.findIndex(p => p.id == id)
        module.permissions.splice(index, 1);
        if(module.permissions.length == 0){
          const indexM = xyz.modules.findIndex(m => m.id == mId)
          xyz.modules.splice(indexM, 1);
        }
      }else{
        module.permissions.push({permission_id: id});
      }
    }else{
      const name = mName;
      xyz.modules.push({ id:mId,name, permissions:[{permission_id: id}] });      
    }
    setRoleSelected(xyz);

    console.log("CHEDKEC",checked);
  }  

  useEffect(()=>{
    fetchRoles();
  },[])  

  const fetchRoles = async () =>
  {
    await Instance.get('/roles')
    .then((response) => {
      console.log("Response",response.data.data);
      const data = response.data.data;
      console.log("data",data)
      setNavConfig(data);
    })
    .catch((error) => {
      console.log(error);  
    })
  }

  const onSubmit = async(params) => 
  {
     const paramRole = {...params, ...roleSelected};
     await Instance.post('/roles',paramRole)
     .then((res) => 
     {
          console.log(res);
          toast.success("Add Role SuccessFully!");
          props.fetchRole();
     })
     .catch((error) => 
     {
      toast.error(error.response.data.message);
    })
     handleClose();
  }

  const openAddRole = () =>
  {
    navigate("/add-role-list");
  }

  return (
    <>
    <Grid container spacing={6} className='match-height'>
      {renderCards()}
      <Grid item xs={12} sm={6} lg={4}>
        <Card
          sx={{ cursor: 'pointer' }}>
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={5}>
              <Box sx={{ height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <img className="rl-img" width={65} height={130} alt='add-role' src='/images/cards/pose_m1.png' />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <CardContent>
                <Box sx={{ textAlign: 'right' }}>
                  <Button
                    variant='contained'
                    sx={{ mb: 2.5, whiteSpace: 'nowrap' }}
                    onClick={openAddRole}
                  >
                    Add Role
                  </Button>
                  <Typography variant='body2'>Add new role,<br/> if it doesn't exist.</Typography>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Dialog fullWidth maxWidth='md' scroll='body' onClose={handleClose} open={open}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle sx={{ textAlign: 'center' }}>
            <Typography variant='h4' component='span'>
              {`${dialogTitle} Role`}
            </Typography>
            <Typography variant='body2'>Set Role </Typography>
          </DialogTitle>
          <DialogContent className="role-pdm" sx={{ p: { xs: 6, sm: 12 } }}>
            <Box sx={{ my: 4 }}>
              <FormControl fullWidth>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Role Name'
                      onChange={onChange}
                      error={Boolean(errors.name)}
                      placeholder='Enter Role Name'
                    />
                  )}
                />
                {errors.name && (
                  <FormHelperText sx={{ color: 'error.main' }}>Please enter a valid role name</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Typography variant='h6'>Role Permissions</Typography>
            <TableContainer>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    {/* <TableCell sx={{ pl: '0 !important' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          fontSize: '0.875rem',
                          alignItems: 'center',
                          textTransform: 'capitalize'
                        }}
                      >
                        Administrator Access
                        <Tooltip placement='top' title='Allows a full access to the system'>
                          <InformationOutline sx={{ ml: 1, fontSize: '1rem' }} />
                        </Tooltip>
                      </Box>
                    </TableCell> */}
                    <TableCell colSpan={3}>
                      <FormControlLabel
                        label='Select All'
                        control={<Checkbox size='small' />}
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                      />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {navConfig.map((i, index) => {
                    if(i.name == 'Super Admin')
                    {
                      return i.modules.map((item) => {
                    return (
                       <>
                       <TableRow key={index} sx={{ '& .MuiTableCell-root:first-of-type': { pl: 0 } }}>
                       <TableCell sx={{ fontWeight: 600, color: theme => `${theme.palette.text.primary} !important` }}>
                          {item.name}
                        </TableCell>
                        {
                        item.permissions.map((per) => {
                    return (
                       <>
                        <TableCell>
                          <FormControlLabel control={<Checkbox size='small' name="permissions" id="permission" 
                          onClick={() => handleChecked(item.id,per.id,item.name)}/>} label={per.name} />
                        </TableCell>
                        </>
                      )
                    })}
                    </TableRow>
                        </>
                      )
                      })
                    }
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
            <Box className='demo-space-x roles-button'>
              <Button size='large' type='submit' className="role-btn-submit" variant='contained'>
                Submit
              </Button>
              <Button size='large' color='secondary' variant='outlined' onClick={handleClose}>
                Discard
              </Button>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
        <Toaster 
        position="top-right"
        reverseOrder={false}
        limits={1}
        preventDuplicates
        autoClose={2000} />
        </>
  )
}

export default RolesCards
