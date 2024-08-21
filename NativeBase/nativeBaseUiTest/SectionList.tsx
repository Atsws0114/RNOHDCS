import {View, StyleSheet, ScrollView} from 'react-native';
import {
  SectionList,
  Heading,
  Text,
  Center,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function SectionListTest() {
  const data = [
    {
      title: 'Cyan',
      data: ['cyan.100', 'cyan.200', 'cyan.300', 'cyan.400', 'cyan.500'],
    },
    {
      title: 'Yellow',
      data: [
        'yellow.100',
        'yellow.200',
        'yellow.300',
        'yellow.400',
        'yellow.500',
      ],
    },
    {
      title: 'Violet',
      data: [
        'violet.100',
        'violet.200',
        'violet.300',
        'violet.400',
        'violet.500',
      ],
    },
  ];

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="SectionListExample">
            <TestCase itShould="SectionListExample" tags={['dev']}>
              <View style={styles.section}>
                <Text>SectionListExample</Text>
                <View style={styles.subSection}>
                  <Center h="80" w="100%">
                    <SectionList
                      maxW="300"
                      w="100%"
                      mb="4"
                      sections={data}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item}) => (
                        <Center py="4" bg={item}>
                          {item.split('.')[1]}
                        </Center>
                      )}
                      renderSectionHeader={({section: {title}}) => (
                        <Center>
                          <Heading fontSize="xl" mt="8" pb="4">
                            {title}
                          </Heading>
                        </Center>
                      )}
                    />
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});
