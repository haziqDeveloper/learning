// ** React Imports
import { useState,useEffect } from 'react'

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
import { useNavigate, useParams,useLocation } from 'react-router-dom'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icons Imports
import ContentCopy from 'mdi-material-ui/ContentCopy'
import toast, { Toaster } from 'react-hot-toast';
import { postRole, getRole, viewGetRole, updateRole } from "src/store/services/roleService"

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
  const location = useLocation();
  const [open, setOpen] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('Add')
  const [mode, setMode] = useState('create');
  const [navConfig, setNavConfig] = useState([]);
  const [checked, setChecked] = useState(false);
  const [dataRole, setDataRole] = useState({
    modules: []
  });
  const [roleSelected, setRoleSelected] = useState({
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


  
  const viewId = useParams();
 console.log("ViewId",viewId.id);

  const handleClickOpen = () => 
  {
    const routeParams = viewId;
    if (routeParams.hasOwnProperty("id")) {
      setDialogTitle('Update');
      setMode("edit");
      viewGetRole(routeParams.id)
      .then((response) => {
       console.log("RRESPONSE Manage",response);
        const data = response;
        const obj = data;
        // obj.active = 1;
        data.modules.map((module,index) => {
          console.log("modules",module);      
          let per = [];
          module.permissions.map((p) => {
            per.push({permission_id: p.id});
          });        
          obj.modules[index].permissions = per;
        })
        setDataRole(obj);
        setValue('name',data['name']);
      })
      .catch((error) => { 
        console.log(error);  
      })
    }
}


  const handleClose = () => {
    navigate("/role-list");
  }

  const renderCards = () =>
    cardData.map((item, index) => (
      <Grid item xs={12} sm={6} lg={4} key={index}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              <Typography variant='h6' sx={{ color: 'text.secondary' }}>
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
              <IconButton size='small'>
                <ContentCopy />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))

  console.log("roleSelected",roleSelected);  

  const handleChecked = (mId,id,mName) =>
  { 
    const xyz = {...dataRole};
    console.log("MNAME_1",xyz);
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
    console.log("MNAME",module,xyz);
    setDataRole(xyz);

    console.log("CHEDKEC",checked);
  }  

  useEffect(()=>{
    fetchRoles();
    handleClickOpen();
  },[])  

  const fetchRoles = async () =>
  {
    getRole()
    .then((response) => {
      console.log("Response",response);
      const data = response.data;
      console.log("data",data)
      setNavConfig(data);
    })
    .catch((error) => {
      console.log(error);  
    })
  }


  const conditionalResponse = (module,permission) => 
  {
    let checked = false;
    if(dataRole)
    {
      dataRole.modules.map((m) => {
        if(module.id === m.id)
        {
          m.permissions.map((p) =>
           {
            if(permission.id === p.permission_id)
            {
              checked = true;
            }
          })
        }
       })
    }
    return checked;
  }

  const onSubmit = async(params) => 
  {
     const paramRole = {...params, ...dataRole};
     delete paramRole.display_name
     delete paramRole.roleDescription
     console.log("ParamRole",paramRole,params);

     if(mode == 'create')
     {
     postRole(paramRole)
     .then((r) => 
     {
      console.log("R",r)
     toast.success("Add Role Successfully!");
     setTimeout(() => { 
      navigate("/role-list");
    },2000)
    //  props.fetchRole();
     })
     .catch((error) => {console.log("R",error)
     toast.error(error.response.data.message);
    })
  }
  else
  {
    const paramRoles = {...dataRole};
    paramRoles.name = params.name;
    delete paramRoles.display_name;
    delete paramRoles.roleDescription;
    const routeParams = viewId;
    console.log("routePar",routeParams.id)
    console.log("USERS",paramRole,routeParams.id);
     updateRole(paramRoles,routeParams.id)
     .then((r) => {
      console.log("USER",r);
      toast.success("Update Role Successfully!");
       setTimeout(() => { 
        navigate("/role-list");
      },2000)
     })
     .catch((error) => {console.log("R",error)
     toast.error(error.response.data.message);
    })
  }
  }


  return (
    <>
   <DialogTitle className="addRole_heading" sx={{ textAlign: 'start' }}>
   <Typography variant='h4' component='span'>
   {`${dialogTitle} New Role`}
   </Typography>
   {/* <Typography variant='body2'>Set Role Permissions</Typography> */}
   </DialogTitle>
    <Card>
    <Grid container spacing={12} className='match-height'>
    <Grid item xs={12} sx={{ mb: 5 }} className="cr-manageDesign">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent className="role-pdm" sx={{ p: { xs: 6, sm: 12 } }}>
          <Grid container spacing={2}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ my: 4 }}>
              <FormControl fullWidth>
                <Controller
                  name='display_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Display Name'
                      onChange={onChange}
                      error={Boolean(errors.name)}
                      placeholder='Enter Display Name'
                    />
                  )}
                />
                {errors.display_name && (
                  <FormHelperText sx={{ color: 'error.main' }}>Please enter a valid display name</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>
          </Grid>
          <Grid item xs={12}>
          <Box className="demo-space-x BoxWidth" sx={{ mb: 4 }}>
				<FormControl fullWidth>
					<Controller
					name="roleDescription"
					control={control}
					rules={{ required: true }}
					render={({ field: { value, onChange } }) => (
					<TextField
					className="TextAreaWidth"
					rows={4.2}
					multiline
					value={value}
					onChange={onChange}
					label="Role Description"
					placeholder="Role Description"
					error={Boolean(errors.roleDescription)}
					aria-describedby="validation-schema-roleDescription"
					/>
					)}
					/>
					{errors.roleDescription && (
					<FormHelperText
					sx={{ color: "error.main" }}
					id="validation-schema-roleDescription">
					{errors.roleDescription.message}
					</FormHelperText>
					)}
				    </FormControl>
				</Box>
          </Grid>
                    <Box className="demo-space-xing" sx={{ mb: 4 }}>
            <Typography variant='h6'>Role Permissions</Typography>
                    </Box>
            <TableContainer>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    {/* <TableCell colSpan={3}>
                      <FormControlLabel
                        label='Select All'
                        control={<Checkbox size='small' />}
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                      />
                    </TableCell> */}
                  </TableRow>
                </TableHead>
                {mode == "edit" ?
               <TableBody>
               {navConfig.map((i, index) => {
                    if(i.name == 'Super Admin')
                    {
                      return i.modules.map((module) => {
                    return (
                       <>
                       <TableRow key={index} sx={{ '& .MuiTableCell-root:first-of-type': { pl: 0 } }}>
                       <TableCell sx={{ fontWeight: 600, color: theme => `${theme.palette.text.primary} !important` }}>
                          {module.name}
                        </TableCell>
                        {
                        module.permissions.map((per) => {
                    return (
                       <>
                        <TableCell>
                          <FormControlLabel control={<Checkbox size='small' name="permissions" id="permission" 
                          onClick={() => handleChecked(module.id,per.id,module.name)} checked={conditionalResponse(module,per)} />} label={per.name} />
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
                :
                <TableBody>
                  {navConfig.map((i, index) => {
                    console.log("ITEM",i);
                    if(i.name == 'Montana Bowman')
                    {
                      return i.modules.map((item) => {
                        console.log("Second ITEM",item);
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
}
                
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
    </Grid>
    </Grid>
    </Card>
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
