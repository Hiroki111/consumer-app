import { Page } from '../../components/page';

import { Button } from '../../components/atoms/button';
import { Heading } from '../../components/atoms/heading';

import { Input } from '../../components/atoms/input';
import { Select } from '../../components/atoms/select';

import { Card } from '../../components/molecules/card';

export const ComponentsPage = props => (
  <Page>
    <table>
      <tbody>
        <tr>
          <td>Heading</td>
          <td>
            <Heading level={4}>Heading example</Heading>
          </td>
        </tr>
        <tr>
          <td>Input</td>
          <td>
            <Input label="Input label" placeholder="..." />
          </td>
        </tr>
        <tr>
          <td>Select</td>
          <td>
            <Select
              label="Select label"
              options={[
                {
                  value: 0,
                  text: 'Select...',
                  disabled: false,
                },
                {
                  value: 1,
                  text: 'Option 1',
                  disabled: false,
                },
                {
                  value: 2,
                  text: 'Option 2',
                  disabled: true,
                },
              ]}
            />
          </td>
        </tr>
        <tr>
          <td>Button</td>
          <td>
            <Button>Button doing nothing</Button>
          </td>
        </tr>
        <tr>
          <td>Card</td>
          <td>
            <Card>Card with some content</Card>
          </td>
        </tr>
      </tbody>
    </table>
  </Page>
);
