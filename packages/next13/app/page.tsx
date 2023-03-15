'use client';
import ValidForm from '@/components/ValidForm';
import List from '@/components/List';
import Select from '@/components/Select';

export default function Home() {
  return (
    <div>
      next js 13
      <div>
        <ValidForm title='test' />
      </div>
      <ul>
        <List
          items={[
            { title: 'a', contents: 'b' },
            { title: 'c', contents: 'd' },
            { title: 'e', contents: 'f' },
          ]}
          renderItem={(item) => (
            <li key={item.title}>
              <span>{item.title} :: </span>
              <span>{item.contents}</span>
            </li>
          )}
        />
      </ul>
      <div>
        <Select
          options={[
            { value: 'a', text: 'a', id: 1 },
            { value: 'b', text: 'b', id: 2 },
            { value: 'c', text: 'c', id: 3 },
          ]}
          onSelect={(data) => {
            console.log(data);
          }}
        ></Select>
        <div>
          <span>Select Data :</span>
          <pre>-</pre>
        </div>
      </div>
    </div>
  );
}
