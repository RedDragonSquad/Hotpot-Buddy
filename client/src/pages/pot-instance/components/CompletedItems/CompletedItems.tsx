import { FC } from 'react';
import { format } from 'date-fns';
import { Stack, Paper, styled } from '@mui/material';
import { PotContent } from 'pages/pot-instance/models';

interface Props {
  cookedPotContent: PotContent[];
}

const CompletedItems: FC<Props> = ({ cookedPotContent }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

  return (
    <Stack spacing={0.5}>
      {Object.entries(cookedPotContent).map(([key, value]) => {
        // date format 	12:00:00 AM was chosen. we can update to a custom format in the future if we choose. https://date-fns.org/v2.29.2/docs/format
        const formattedTime = format(new Date(value.endTime * 1000), 'pp');
        return (
          <div key={key}>
            <Item>
              {value.name} || Consumed Time: {formattedTime}
            </Item>
          </div>
        );
      })}
    </Stack>
  );
};

export default CompletedItems;
