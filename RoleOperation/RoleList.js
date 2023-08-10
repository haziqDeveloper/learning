import { filter } from 'lodash';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// material
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableContainer,
  TablePagination,
  Grid,
} from '@mui/material';
// components
import Dialog from '@mui/material/Dialog';
import { useForm, Controller } from 'react-hook-form';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import TableHead from '@mui/material/TableHead'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

import UserManagement from '../../components/UserManagement/UserManagement';
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import { UserListHead, UserMoreMenu } from '../../sections/@dashboard/user';
// mock
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import toast, { Toaster } from 'react-hot-toast';
import USERLIST from '../../_mock/user';
import axios from 'axios' ;
import Instance from 'src/store/axios';
import RoleCards from 'src/pages/Role_Management/RoleCards'
import { deleteRole, getRole } from "src/store/services/roleService"
import Swal from "sweetalert2";


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: '#', label: '#', alignRight: false },
  { id: 'User', label: 'User', alignRight: false },
  { id: 'Email', label: 'Email', alignRight: false },
  { id: 'Role', label: 'Role', alignRight: false },
  { id: 'Plan', label: 'Plan', alignRight: false },
  { id: 'Status', label: 'Status', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const RoleList = () => {

  const [allRoles, setAllRoles ] = useState([]);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('Created date');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [toggleform, setToggleForm] = useState(false);

  const [open, setOpen] = useState(false);

  const [dialogTitle, setDialogTitle] = useState('Edit')

  const [navConfig, setNavConfig] = useState([]);

  const [dataRole, setDataRole] = useState("");


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(allRoles, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const handleClickOpen = async(id) => 
  {
    setOpen(true);
    var rId = id;
    await Instance.get(`/roles/${rId}`)
    .then((response) => {
      const data = response.data;
      const obj = data;
      obj.active = 1;
      data.modules.map((module,index) => {
        
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

  const handleChecked = (mId,id,mName) =>
  { 
    const xyz = {...dataRole};
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
    setDataRole(xyz);
  }  

  useEffect(() => {
    fetchRole();
    fetchRoles();
  }, []);

  const fetchRoles = async () =>
  {
    await Instance.get('/roles')
    .then((response) => {
      const data = response.data.data;
      setNavConfig(data);
    })
    .catch((error) => {
      console.log(error);  
    })
  }

  const fetchRole = async () =>
  {
    getRole()
    .then((response) => {
      const data = response.data;
      setAllRoles(data);
    })
    .catch((error) => {
      console.log(error);  
    })
  }

  const deleteRoles = async(id) =>
  { 
      const rId = id;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteRole(rId).then((r) => {
            toast.success("Delete The Role Successfully");
            fetchRole();
          });
        }
      });
  }

  const handleClose = () => {
    setOpen(false)
    setValue('name', '')
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
    const roleId = dataRole.id;
     const data = {...params, ...dataRole};
     await Instance.put(`/roles/${roleId}`,data)
     .then((res) => 
     {
          const data = res.data;
          console.log("Update Role Responese",data);
          let roleIndex = '';
          allRoles.map((role,index) => {

            if(role.id == data.id)
            {
              roleIndex = index;
            }
          })
          const roles = [...allRoles];
          roles[roleIndex] = data;
          setAllRoles(roles);
          toast.success("Update Role SuccessFully!");
     })
     .catch((error) => 
     {
      
      toast.error(error.response.data.message);
    })
     handleClose();
  }

  const name = ['ivan', 'smith', 'liam'];

  const res = name.find(n =>  n === 'smith') 
 
  console.log("RESPONSEing", res);

  return (
    <Page title="Role List">
      <Container className="UserPagePadding roleList-heading">
       <h1>Roles</h1> 
      <Grid item xs={12} sx={{ mb: 5 }}>
          <RoleCards fetchRole={fetchRole}/>
          </Grid>
        <Card className='cr-roles'>
          <Scrollbar>
          <TableContainer className='hd-role'>
          <h4>Users List with their Roles</h4>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    return (
                         <>
                        <TableRow hover key={id} className="table-body">          
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">info@azizahmed.com</TableCell>
                      <TableCell align="left">Author</TableCell>
                      <TableCell align="left">Enterprise</TableCell>
                      <TableCell align="left">Active</TableCell>
                      <TableCell align="center">
                        <UserMoreMenu
															callbackDelete={() =>
																deleteRoles(row.id)
															}
															editLink={`/edit-role-list/${row.id}`}
														/>  
                      </TableCell>
                        {/* <TableCell align="left">
                          {
                            row.modules.map((item) =>
                            { 
                              return(
                                <>
                               <TableCell align="center">
                               {item.name}
                              </TableCell> 
                                </>
                              )      
                            })
                          }
                        </TableCell> */}
                        </TableRow>
              </>         
                    );
                  })}

                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <p>User Not Found</p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            <Grid>
            <Dialog fullWidth maxWidth='md' scroll='body' onClose={handleClose} open={open}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle sx={{ textAlign: 'center' }}>
            <Typography variant='h4' component='span'>
              {`${dialogTitle} Role`}
            </Typography>
            <Typography variant='body2'>Set Role Permissions</Typography>
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
          </Scrollbar>
          <div className="pagination-main-div">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={allRoles.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage="1 - 4 Display/Total 4"
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </Card>
      </Container>
    </Page>
  );
};
export default RoleList;
