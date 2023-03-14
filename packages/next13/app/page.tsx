import ValidForm from '@/components/ValidForm';
import List from '@/components/List';

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
    </div>
  );
}
