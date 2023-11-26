import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState , useEffect } from 'react'
import Link from 'next/link';
import { Button } from '@mui/material';
import './style.css'
import CategoryIcon from '@mui/icons-material/Category';



function Category() {
    const [categories, setcategories] = useState([])
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    useEffect(() => {
        fetchCategory()

    }, []);
  
    async function fetchCategory() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getCategoryProduct')
        const data = await response.json()

        setcategories(data.Category.values)
        // console.log(data.Category.values)
      } catch (error) {
        console.error('Error', error)
      }
    }
    if (categories.length === 0) {
        return null
      }

      const open = Boolean(anchorEl);

      const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
      ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };


  return (
    <div>
      <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
        className='list'
      >
        <ListItem
          
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="categories"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
          
            primary="categories"
            secondary={categories[selectedIndex]} 
            className='listitem'
          />
          <CategoryIcon/>
        </ListItem>
      </List>
      </div>
      <div className="lock-menu">
      <Menu
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {categories.map((option, index) => (
          <MenuItem
            key= {option}
            disabled={index === -1}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <Link href={`/admin/${option}`}>
              <Button>
                {option}
                </Button> 
                </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
    </div>
  )
}

export default Category
