// @mui
import * as React from 'react';
import { useState } from 'react';

import DoneIcon from '@mui/icons-material/Done';
import {
  Grid,
  Card,
  CardHeader,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Select,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// components
import Page from '../../components/Page';
// sections

// ----------------------------------------------------------------------

const Role = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [role, setRole] = useState({
    name: '',
    description: '',
    date: '',
    creationdate: '',
    lastmodified: '',
    product: '',
    customer: '',
    subscription: '',
    coupon: '',
    paymenthistory: '',
    report: '',
    setting: '',
    user: '',
    user1: '',
  });
  let name = '';
  let value = '';

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRole({ ...role, [name]: value });
  };
  const onSubmit = (e) => {
    console.log("Role Form Fields", role)
  };

  return (
    <Page className="RolePage" title="ロール一覧／ ロール">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className="RoleCard">
            <CardHeader title="ロール" className="RolePageHeading" />
            <Grid container spacing={2} className="RoleCardBody">
              <Grid item xs={6}>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <TextField
                      value={role.name}
                      label="名称"
                      name="name"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>

                <Box className="demo-space-x BoxWidth" sx={{ mb: 4 }}>
                  <TextField
                    className="TextAreaWidth"
                    value={role.description}
                    name="description"
                    rows={8.5}
                    multiline
                    label="説明"
                    id="textarea-outlined-static"
                    onChange={handleChange}
                  />
                </Box>

                <Box className="BoxWidth">
                  <LocalizationProvider dateAdapter={AdapterDateFns} className="DateFullWidth">
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="有効期間"
                      value={dateValue}
                      onChange={(newValue) => {
                        setDateValue(newValue)
                        setRole({ ...role, ['date']: newValue });
                      }}
                    />
                  </LocalizationProvider>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <TextField label="作成日時"
                      value={role.creationdate}
                      name="creationdate"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <TextField label="最終更新日時"
                      value={role.lastmodified}
                      name="lastmodified"
                      onChange={handleChange} />
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="product-label">商品</InputLabel>
                    <Select
                      labelId="product-label"
                      id="product"
                      value={role.product}
                      label="商品"
                      name="product"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="customer-label">顧客</InputLabel>
                    <Select
                      labelId="customer-label"
                      id="customer"
                      value={role.customer}
                      label="顧客"
                      name="customer"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="subscription-label">サブスクリプション</InputLabel>
                    <Select
                      labelId="subscription-label"
                      id="subscription"
                      value={role.subscription}
                      label="サブスクリプション"
                      name="subscription"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="coupon-label">クーポン</InputLabel>
                    <Select
                      labelId="coupon-label"
                      id="coupon"
                      value={role.coupon}
                      label="クーポン"
                      name="coupon"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="paymenthistory-label">決済履歴</InputLabel>
                    <Select
                      labelId="paymenthistory-label"
                      id="paymenthistory"
                      value={role.paymenthistory}
                      label="決済履歴"
                      name="paymenthistory"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="report-label">レポート</InputLabel>
                    <Select
                      labelId="report-label"
                      id="report"
                      value={role.report}
                      label="レポート"
                      name="report"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="setting-label">設定</InputLabel>
                    <Select
                      labelId="setting-label"
                      id="setting"
                      value={role.setting}
                      label="setting"
                      name="setting"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="user-label">運用者</InputLabel>
                    <Select
                      labelId="user-label"
                      id="user"
                      value={role.user}
                      label="user"
                      name="user"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし2</MenuItem>
                      <MenuItem value={'なし3'}>なし3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="BoxWidth">
                  <FormControl fullWidth>
                    <InputLabel id="user1-label">運用者</InputLabel>
                    <Select
                      labelId="user1-label"
                      id="user1"
                      value={role.user1}
                      label="user1"
                      name="user1"
                      onChange={handleChange}
                    >
                      <MenuItem value={'なし'}>なし</MenuItem>
                      <MenuItem value={'なし2'}>なし</MenuItem>
                      <MenuItem value={'なし3'}>なし</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center" xs={12} className="RoleCardButton">
              <Button variant="outlined" className="DeleteButton">
                削除
              </Button>
              <Button variant="contained" className="SaveButton" startIcon={<DoneIcon />} onClick={onSubmit}>
                保存
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};
export default Role;